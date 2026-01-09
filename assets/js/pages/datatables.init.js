$(document).ready(function () {
  var $datatableEl = $("#datatable");
  var isMobile = window.matchMedia("(max-width: 576px)").matches;

  function initDatatable(useScrollX) {
    return $datatableEl.DataTable({
      language: {
        paginate: {
          previous: "Précédent",
          next: "Suivant",
          first: "Premier",
          last: "Dernier",
        },
        lengthMenu: "Affiche _MENU_ éléments",
        search: "Recherche :",
        info: "Affichage de _START_ à _END_ sur _TOTAL_ éléments",
        infoEmpty: "Affichage de 0 à 0 sur 0 éléments",
        infoFiltered: "(filtré à partir de _MAX_ éléments au total)",
        emptyTable: "Aucune donnée disponible dans le tableau",
        zeroRecords: "Aucun enregistrement correspondant trouvé",
        loadingRecords: "Chargement...",
        processing: "Traitement...",
      },
      responsive: false,
      scrollX: useScrollX,
      autoWidth: false,
      columnDefs: [{ targets: -1, searchable: false, orderData: [0]}],
      createdRow: function (row) {
        $(row).find("td").last().addClass("datatable-actions");
      },
    });
  }

  var datatable = initDatatable(isMobile);
  datatable.columns.adjust();

  $(window).on("resize", function () {
    var nextIsMobile = window.matchMedia("(max-width: 576px)").matches;

    if (nextIsMobile !== isMobile) {
      isMobile = nextIsMobile;
      datatable.destroy();
      datatable = initDatatable(isMobile);
    }

    datatable.columns.adjust();
  });

  $("#datatable-buttons")
    .DataTable({
      lengthChange: !1,
      buttons: ["copy", "excel", "pdf", "colvis"],
      language: {
        paginate: {
          previous: "Précédent",
          next: "Suivant",
          first: "Premier",
          last: "Dernier",
        },
        lengthMenu: "Affiche _MENU_ éléments",
        search: "Recherche :",
        info: "Affichage de _START_ à _END_ sur _TOTAL_ éléments",
        infoEmpty: "Affichage de 0 à 0 sur 0 éléments",
        infoFiltered: "(filtré à partir de _MAX_ éléments au total)",
        emptyTable: "Aucune donnée disponible dans le tableau",
        zeroRecords: "Aucun enregistrement correspondant trouvé",
        loadingRecords: "Chargement...",
        processing: "Traitement...",
      },
    })
    .buttons()
    .container()
    .appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)"),
    $(".dataTables_length select").addClass("form-select form-select-sm");
});
