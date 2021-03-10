const video = {
    title: 'd',
    tag: ['a', 'b', 'c'],


    showTags() {
        this.tag.forEach(function (tag) {

            console.log(this.title, tag);
        }.bind(this));

    }

};
video.showTags();












