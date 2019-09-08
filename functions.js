$(document).ready(() => {
    // Cambiar a modo nocturno si el pestillo se encuentra seleccionado
    var pestillo =  $('#mode')
    
    pestillo.change(() => {
        var condicion = pestillo.is(':checked')
        
        if(!condicion) {
            pestillo.prop('checked', false)
            
            // Cambiando el navbar
            $('#navbar').css({
                'background-color': '#f8f9f9'
            })
            
            // Cambiando el footer
            $('#footer').css({
                'background-color': '#566573'
            })
            
            // Cambiando el sidebar
            $('#sidebar').css({
                'background-color': '#566573'
            })
            
            // Cambiando los span
            $('#sidebar span').css({
                'color': '#f8f9f9'
            })
            
            $('#navbar span').css({
                'color': '#5d6D7e'
            })
            
            $('#footer span').css({
                'color': '#f8f9f9'
            })
            
            // Cambiando article
            $('#article').css({
                'background-color': '#fff'
            })
            
            $('#article h1').css({
                'color': '#000'
            })
            
            $('#article p').css({
                'color': '#000'
            })
        
        } else {
            pestillo.prop('checked', true)
            
            // Cambiando el navbar
            $('#navbar').css({
                'background-color': '#2e4053'
            })
            
            // Cambiando el footer
            $('#footer').css({
                'background-color': '#212f3d'
            })
            
            // Cambiando el sidebar
            $('#sidebar').css({
                'background-color': '#212f3d'
            })
            
            // Cambiando los span
            $('#sidebar span').css({
                'color': '#2979ff'
            })
            
            $('#navbar span').css({
                'color': '#2979ff'
            })
            
            $('#footer span').css({
                'color': '#2979ff'
            })
            
            // Cambiando article
            $('#article').css({
                'background-color': '#1c2833'
            })
            
            $('#article h1').css({
                'color': '#ecf0f1'
            })
            
            $('#article p').css({
                'color': '#ecf0f1'
            })
        }
    })
})