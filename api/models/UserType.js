module.exports = {

  attributes: {
    Users: {
      collection: 'User',
      via: 'usertype'
    },
    nameType: {
      type: 'string',
      required: true,
      unique: true,
      maxLength: 200,
      example: 'Admin'
    },

//  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
//  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
//  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
  },


};
