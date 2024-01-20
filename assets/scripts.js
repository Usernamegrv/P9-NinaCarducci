$(document).ready(function () {
  try {
    $(".gallery").mauGallery({
      columns: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 3,
      },
      lightBox: true,
      lightboxId: "myAwesomeLightbox",
      showTags: true,
      tagsPosition: "top",
    });
  } catch (error) {
    console.error(
      "une erreur s'est produite lors de la configuration de la galerie:",
      error
    );
  }
});

// ajout gestion erreur
