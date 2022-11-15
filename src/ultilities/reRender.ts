const reRender = async (element: string, component) => {
    if(element) {
        document.getElementById(element).innerHTML = await component.render()
    } 
    if(component.afterRender) {
        await component.afterRender()
    }
}
export default reRender