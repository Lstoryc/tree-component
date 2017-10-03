export const vueNodeTemplateHtml = `<li role="treeitem" :class="nodeClassName" :id="id"><i class="tree-icon tree-ocl" role="presentation" @click="ontoggle()"></i><a :class="anchorClassName" href="javascript:void(0)" :draggable="draggable" @click="onchange()" @dblclick="ontoggle()" @mouseenter="hover(true)" @mouseleave="hover(false)" @contextmenu="oncontextmenu($event)" :data-path="pathString"><i v-if="checkbox" :class="checkboxClassName" role="presentation"></i><i v-if="data.icon !== false" :class="iconClassName" role="presentation"></i><component v-if="data.component" :is="data.component" :data="data"></component><template v-else>{{data.text}}</template><span v-if="hasMarker" :class="markerClassName">&#160;</span><div v-if="data.contextmenu && contextmenuVisible" :style="contextmenuStyle"><component :is="data.contextmenu" :data="contextmenuData"></component></div></a><ul v-if="data.children" role="group" class="tree-children"><node v-for="(child, i) in data.children" :key="i" :data="child" :last="i === data.children.length - 1" :checkbox="checkbox" :path="geChildPath(i)" :draggable="draggable" :root="root" :zindex="zindex" :preid="preid" @toggle="ontoggle($event)" @change="onchange($event)"></node></ul></li>`;
export const vueTreeTemplateHtml = `<div :class="rootClassName" role="tree"><ul :class="containerClassName" role="group" @dragstart="ondragstart($event)" @dragend="ondragend($event)" @dragover="ondragover($event)" @dragenter="ondragenter($event)" @dragleave="ondragleave($event)" @drop="ondrop($event)"><node v-for="(child, i) in data" :key="i" :data="child" :last="i === data.length - 1" :checkbox="checkbox" :path="[i]" :draggable="draggable" :root="data" :zindex="zindex" :preid="preid" @toggle="ontoggle($event)" @change="onchange($event)"></node></ul></div>`;
