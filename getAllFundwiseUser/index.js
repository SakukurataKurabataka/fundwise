module.exports = async function (context, req, getAllUsers) {
    context.log('HTTP trigger function processed a request.');
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: getAllUsers
    };
};
