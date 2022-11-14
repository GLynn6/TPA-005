'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert("Users", [
      {
        name: "febrianto",
        email: "febrianto@gmail.com",
        password: "tes",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        name: "glynn",
        email: "glynn@gmail.com",
        password: "123",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        name: "christi",
        email: "christi@gmail.com",
        password: "321",
        createdAt: new Date(), 
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
