const principles = [
  "Don't say I will back to fix it later,",
  "Always leave the campground cleaner than you found it,",
  "The name of a variable, function or class, should answer all the big questions,",
  "Firstly, functions should be small, secondly functions should be smaller than that,",
  "Nothing can be quite so helpful as a well-placed comment,",
  "Code formatting is important. It is too important to ignore,",
  "Always make place for error handling,",
  "Set boundaries, and be careful when you use third party code,",
  "Don't ignore writing test, its the real shortcut,",
  "Classes should be small, with single responsibility principle,",
  "Systems should separate the startup process.",
].map((principle, index) => `${index + 1}. ${principle}`);

console.info(
  [, "*********** Clean Code Rules (OwlEye) ***********", , ...principles, ,].join("\n")
);

module.exports.owlEye = null;
