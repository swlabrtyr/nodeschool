function foo() {
    var bar;
    function zip() {
        var bar = true;
    }
    return zip;
}

foo();
