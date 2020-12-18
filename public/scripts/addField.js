//Procurar o botão
document
	.querySelector("#add-time")
	//Quando clicar no botão
	.addEventListener("click", cloneField);
//Executar uma ação
function cloneField() {
	//Duplicar os campos, que campos?
	const newFieldContainer = document
		.querySelector(".schedule-item")
		.cloneNode(true);
	//Pegar  os campos. Que campos?
	const fields = newFieldContainer.querySelectorAll("input");
	//para cada campo limpar
	fields.forEach(function (field) {
		fields.value = "";
	});

	// Colocar na página, onde?
	document.querySelector("#schedule-items").appendChild(newFieldContainer);
}
