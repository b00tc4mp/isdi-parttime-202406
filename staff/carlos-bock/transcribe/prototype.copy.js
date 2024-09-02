var foo = ["a", "b", "c", "d", "e"];
var bar = [1, 2, 3, 4, 5];
foo.at(3);
foo.at = undefined;
foo.at(); // Deberá fallar
bar.at(2);
delete Array.prototype.at;
bar.at(2); // Deberá fallar