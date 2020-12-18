const Database = require("./db");
const createProffy = require("./createProffy");

Database.then(async (db) => {
	//Inserir dados
	proffyValue = {
		name: "Vitor Vieira",
		avatar: "https://avatars3.githubusercontent.com/u/62679174?s=460&v=4",
		whatsapp: "8989898989",
		bio: "Instrutor de Física",
	};

	classValue = {
		subject: 1,
		cost: "20",
	};

	classScheduleValues = [
		{
			weekday: 1,
			time_from: 720,
			time_to: 1220,
		},

		{
			weekday: 0,
			time_from: 520,
			time_to: 1220,
		},
	];

	//await createProffy(db, { proffyValue, classScheduleValues, classValue });
	//Consulatar os dados inseridos

	// todos os proffys
	const selectedProffys = await db.all("SELECT * FROM proffys");
	//console.log(selectedProffys);

	// consultar as classes de um determinado professor
	// e trazer junto os dados dos proffys

	const selectClassesAndProffys = await db.all(`
		SELECT classes.*,proffys.*
		FROM proffys
		JOIN classes ON (classes.proffy_id = proffys.id)
		WHERE classes.proffy_id = 1;
	`);
	//console.log(selectClassesAndProffys);

	const selectClassesSchedules = await db.all(`
		SELECT class_schedule.*
		FROM class_schedule
		WHERE class_schedule.class_id = "1"
		AND class_schedule.weekday = "0"
		AND class_schedule.time_from <= "1300"
		AND class_schedule.time_to > "1300"
	`);

	//console.log(selectClassesSchedules);
});
