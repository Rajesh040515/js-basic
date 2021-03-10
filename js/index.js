const video = {
    title: 'a',
    tag: ['a', 'b', 'c'],


    showTags() {
        this.tag.forEach(function (tag) {

            console.log(this, tag);
        });

    }

};
console.showTags();