document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar todos los botones de "Edit"
    document.querySelectorAll(".btn-secondary").forEach(button => {
        button.addEventListener("click", function () {
            let card = this.closest(".card");
            let cardBody = card.querySelector(".card-text");
            let cardImg = card.querySelector("img");
            
            let newText = prompt("Edita el texto:", cardBody.textContent);
            if (newText !== null) {
                cardBody.textContent = newText;
            }
            
            let newImg = prompt("Edita la URL de la imagen:", cardImg.src);
            if (newImg !== null) {
                cardImg.src = newImg;
            }
        });
    });

    // Crear el modal para "View"
    let modal = document.createElement("div");
    modal.innerHTML = `
        <div class="modal fade" id="viewModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Vista de Tarjeta</h5>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <img id="modalImg" class="img-fluid mb-3" src="" alt="">
                        <p id="modalText"></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Seleccionar todos los botones "View"
    document.querySelectorAll(".btn-primary").forEach(button => {
        button.addEventListener("click", function () {
            let card = this.closest(".card");
            let imgSrc = card.querySelector("img").src;
            let text = card.querySelector(".card-text").textContent;

            document.getElementById("modalImg").src = imgSrc;
            document.getElementById("modalText").textContent = text;
            
            // Mostrar modal
            $("#viewModal").modal("show");
        });
    });
});
