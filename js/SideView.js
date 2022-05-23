AFRAME.registerComponent('place-side-view',{
  init:function(){
    this.createPlaces()
  },

  tick:function(){
    const placesContainer = document.querySelector("#places-container")
    const {state} = placesContainer.getAttribute("tour")
    if(state==="view"||state==="change-view"){
      this.el.setAttribute("visible", true)
    }
    else{
      this.el.setAttribute("viisble", false)
    }
  },

  createPlaces:function(){
    const sideViewContainer = document.querySelector("#side-view-container")
    let previousXPosition = -150
    let previousYPosition = 30
    for(var i=1 ; i<=4; i++){
      const position = {
        x:(previousXPosition+=50),
        y:(previousYPosition+=2),
        z:-40
      }
      const entityEl = this.createPlaceThumbnail(position,i)
      sideViewContainer.appendChild(entityEl)
    }
  },

  createPlaceThumbnail:function(position, id){
    const entityEl = document.createElement('a-entity')
    entityEl.setAttribute('visible', true)
    entityEl.setAttribute('id', `place-${id}`)
    entityEl.setAttribute('geometry',{
      primitive:'circle',
      radius:2.5
    })
    entityEl.setAttribute('material',{
      src:'./assets/helicopter.png',
      opacity:'0.9'
    })
    entityEl.setAttribute('position', position)
    entityEl.setAttribute('cursor-listener',{})
    return entityEl
  }
})
