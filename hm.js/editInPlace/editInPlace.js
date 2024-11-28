/**
 * @func 就地编辑
 * @param {id,parent 父节点,value 默认值}
 * @author wayhome
 * @date 2024-06-12
 */

function EditInPlace(id,parent,value) {
    this.id = id; // 跨函数共享属性
    this.parent = parent || document.body; // 默认挂载到根节点
    this.value = value || '这个家伙很懒，什么都没留下';
    this.createElement(this.id);
}

EditInPlace.prototype.createElement = function(id) {
    //console.log(id);
    this.containerElement = document.createElement('div');
    this.containerElement.id = id;
    this.parent.appendChild(this.containerElement);

    this.staticElement = document.createElement('span');
    this.staticElement.innerText = this.value;
    this.containerElement.appendChild(this.staticElement);

}