'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Lists", [
      {
        task: "bantu orang tua",
        desc: "membantu membersihkan rumah",
        complete: true,
        userId: 1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        task: "Masuk kelas zoom",
        desc: "Kelas hari ini belajar tentang desain database",
        complete: false,
        userId: 1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      
      {
        task: "Kekampus ",
        desc: "ke kampus untuk mengikuti acara seminar",
        complete: false,
        userId: 2,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
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
