document.addEventListener('DOMContentLoaded', function() {

    const imageToDescriptionMap = {
        'elvis-1': 'descripcion-elvis-1',
        'elvis-ComeBack': 'descripcion-elvis-2'
    };
    
    // Almacena la descripción actualmente abierta (para cerrar otras si se abre una nueva)
    let activeDescription = null;
    let activeImage = null;

    // Iterar sobre cada ID de imagen en nuestro mapa
    Object.keys(imageToDescriptionMap).forEach(imageId => {
        const currentImage = document.getElementById(imageId);
        const descriptionId = imageToDescriptionMap[imageId];
        const descriptionElement = document.getElementById(descriptionId);

        if (currentImage && descriptionElement) {
            
            currentImage.classList.add('image-click-effect'); 

            currentImage.addEventListener('click', function() {
                // Si hay una descripción activa Y no es la misma que estamos clickeando ahora
                if (activeDescription && activeDescription !== descriptionElement) {
                    // Ocultar la descripción anterior
                    activeDescription.classList.remove('show-description');
                    activeDescription.classList.add('hidden-description');
                    // Restaurar la imagen anterior
                    activeImage.classList.remove('clicked');
                    activeImage.style.transform = 'scale(1)';
                    activeImage.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                }

                // Alternar la visibilidad de la descripción actual
                if (descriptionElement.classList.contains('show-description')) {
                    // Si ya está mostrada, ocultarla
                    descriptionElement.classList.remove('show-description');
                    descriptionElement.classList.add('hidden-description');
                    // Restaurar el estilo de la imagen
                    this.classList.remove('clicked');
                    this.style.transform = 'scale(1)';
                    this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';

                    activeDescription = null; // No hay descripción activa
                    activeImage = null;
                } else {
                    // Si está oculta, mostrarla
                    descriptionElement.classList.remove('hidden-description');
                    descriptionElement.classList.add('show-description');
                    // Aplicar el estilo de click a la imagen
                    this.classList.add('clicked');
                    this.style.transform = 'scale(1.08)'; // Expande al 108%
                    this.style.boxShadow = '0 8px 16px rgba(255, 1, 1, 1)';

                    activeDescription = descriptionElement; // Establecer como descripción activa
                    activeImage = this;
                }
            });
        }
    });

    //  Cierra cualquier descripción abierta si se hace clic fuera de la imagen/descripción
    document.addEventListener('click', function(event) {
        // Asegúrate de que no se haga clic en una imagen o su descripción
        const isClickInsideImage = event.target.closest('.image-click-effect');
        const isClickInsideDescription = event.target.closest('.show-description');

        if (!isClickInsideImage && !isClickInsideDescription && activeDescription) {
            // Si el clic fue fuera y hay una descripción abierta
            activeDescription.classList.remove('show-description');
            activeDescription.classList.add('hidden-description');
            activeImage.classList.remove('clicked');
            activeImage.style.transform = 'scale(1)';
            activeImage.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            activeDescription = null;
            activeImage = null;
        }
    });

  

}); 
   
