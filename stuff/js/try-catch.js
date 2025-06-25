function foo(bool) {
  if (bool) {
    throw new Error("Algo ha salido mal");
  }

  return "Todo ha ido bien";
}

try {
  const response = foo(false);
  alert(response);
} catch (err) {
  alert(err.message);
} finally {
  alert("Finalmente aparezco yo");
}
