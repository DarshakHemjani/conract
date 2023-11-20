module.exports = function (model) {
    var module = {};

    let md5 = require('md5')
    const { Op } = require('sequelize');

    module.syncContacts = async function (req, res) {
        console.log("Request Body:", req.body);

        const { userId, Contacts: contacts } = req.body;
        console.log("Contacts:", contacts);

        try {
            const existingContacts = await model.contact.findAll({ where: { userId } });

            console.log("existingContacts", existingContacts);

            const duplicateContacts = [];
            for (const contact of contacts) {
                const existingContact = existingContacts.find(
                    (c) => c.number === md5(contact.number) && c.userId === userId
                );

                if (existingContact) {
                    duplicateContacts.push(contact);
                }
            }

            if (duplicateContacts.length > 0) {
                return res.json({ success: false, message: 'Duplicate contacts are not allowed.', duplicates: duplicateContacts });
            }

            const encryptedContacts = contacts.map((contact) => ({
                userId,
                name: contact.name,
                number: md5(contact.number),
            }));

            await model.contact.bulkCreate(encryptedContacts);

            res.json({ success: true, message: 'Data saved successfully.' });

        } catch (error) {
            console.error("Error syncing contacts:", error);
            res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
        }
    };


    module.findCommonUsers = async function (req, res) {
        console.log("ab2-----");
        console.log("reww", req.query);

        try {
            const searchNumber = req.query['1234567890'];

            if (!searchNumber) {
                return res.status(400).json({ success: false, message: 'searchNumber is required' });
            }

            console.log("searchNumber:", searchNumber);

            const result = await model.user.findAll({
                where: {
                    number: searchNumber,
                },
                attributes: ['id'],
            });
            console.log("result", result);
            const finalResult = await model.user.findAll({
                where: {
                    number: searchNumber
                }
            });

            console.log("finalResult", finalResult);

            if (!finalResult.length) {
                return res.json({ Name: null, commonUsers: [] });
            }

            const commonUsers = finalResult.map(user => user.id);

            const name = finalResult[0].name || null;

            res.json({ Name: name, commonUsers: commonUsers });


        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    };

    module.getContacts = async function (req, res) {
        try {
            var start = parseInt(req.query.start) || 0;
            var length = parseInt(req.query.length) || 10;
            var search = req.query.search ? req.query.search.value : ''
            var query = '';
            if (search != '') {
                query = {
                    [Op.or]: [
                        { 'name': { [Op.like]: '%' + search + '%' } },
                    ]
                };
            } else {
                query = {};
            }

            var totalCount = await model.contact.count({ where: query })
            var contact = await model.contact.findAll({
                where: query,
                order: [['id', 'desc']],
                offset: start,
                limit: length,
                raw: true
            });

            var obj = {
                'draw': req.query.draw,
                'recordsTotal': totalCount,
                'recordsFiltered': totalCount,
                'data': contact
            };

            return res.send(JSON.stringify(obj));
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }


    return module
}