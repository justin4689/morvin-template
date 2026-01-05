$(document).ready(function () {
  $(".datatable").DataTable({
    language: {
      paginate: {
        previous: "Précédent",
        next: "Suivant",
        first: "Premier",
        last: "Dernier",
      },
      lengthMenu: "Affiche _MENU_ éléments",
      search: "Recherche",
      info: "Affichage de _START_ à _END_ sur _TOTAL_ éléments",
      infoEmpty: "Affichage de 0 à 0 sur 0 éléments",
      infoFiltered: "(filtré à partir de _MAX_ éléments au total)",
      emptyTable: "Aucune donnée disponible dans le tableau",
      zeroRecords: "Aucun enregistrement correspondant trouvé",
      loadingRecords: "Chargement...",
      processing: "Traitement...",
    },
  }),
    $(".dataTables_length select").addClass("form-select form-select-sm");
});
