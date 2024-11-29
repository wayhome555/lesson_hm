function EditInPlace(id, parent, value) {
    this.id = id; // 跨函数共享属性
    this.parent = parent || document.body; // 默认挂载到根节点
    this.value = value || '这个家伙很懒，什么都没留下';
    this.createElement(this.id);
    this.editing = false;  // 标记当前是否处于编辑模式
}

// 创建元素的方法
EditInPlace.prototype.createElement = function(id) {
    this.containerElement = document.createElement('div');
    this.containerElement.id = id;
    this.parent.appendChild(this.containerElement);

    this.staticElement = document.createElement('span');
    this.staticElement.innerText = this.value;
    this.containerElement.appendChild(this.staticElement);

    // 添加点击事件监听器，点击时切换到编辑模式
    this.staticElement.addEventListener('click', () => this.toggleEditMode());
    // 添加失去焦点事件监听器，当输入框失去焦点时保存内容
    this.containerElement.addEventListener('blur', () => this.saveContent(), true);  // 使用捕获阶段
}

// 切换编辑模式的方法
EditInPlace.prototype.toggleEditMode = function() {
    if (this.editing) {
        this.saveContent();
    } else {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = this.staticElement.innerText;
        input.style.width = `${this.staticElement.offsetWidth}px`;
        
        this.containerElement.innerHTML = '';  // 清空容器内容
        this.containerElement.appendChild(input);
        input.focus();  // 让输入框获得焦点

        this.editing = true;
    }
}

// 保存内容的方法
EditInPlace.prototype.saveContent = function() {
    if (this.editing) {
        const input = this.containerElement.querySelector('input');
        this.staticElement.innerText = input.value;  // 更新静态元素的文本
        this.containerElement.innerHTML = '';  // 清空容器内容
        this.containerElement.appendChild(this.staticElement);  // 重新添加静态元素
        this.editing = false;
    }
}