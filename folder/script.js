'use strict';
function showResult() {
    const q1 = document.querySelector('input[name="q1"]:checked')?.value;
    const q2 = document.querySelector('input[name="q2"]:checked')?.value;

    if (!q1 || !q2) {
        alert("Пожалуйста, ответьте на все вопросы!");
        return;
    }

    let result = "";
    if (q1 === "latina") {
        result = "Вам подходит Анна Иванова!";
    } else if (q1 === "hiphop") {
        result = "Вам подходит Игорь Петров!";
    } else if (q1 === "ballroom") {
        result = "Вам подходит Елена Смирнова!";
    }

    document.getElementById("testResult").textContent = result;
}