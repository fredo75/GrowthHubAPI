//= require rails-ujs
//= require_tree .


//= require jquery3
//= require jquery
//= require jquery_ujs
//= require dataTables/jquery.dataTables
//= require popper
//= require bootstrap

$('.datatable').DataTable();
$(document).ready(function(){
  $("table[role='datatable']").each(function(){
    $(this).DataTable({
      processing: true
    });
  });
})
