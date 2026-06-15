const fields = {
  name: document.getElementById("dollName"),
  job: document.getElementById("dollJob"),
  model: document.getElementById("dollModel"),
  birthday: document.getElementById("dollBirthday"),
  quote: document.getElementById("dollQuote"),
};

const preview = {
  name: document.getElementById("previewName"),
  job: document.getElementById("previewJob"),
  model: document.getElementById("previewModel"),
  birthday: document.getElementById("previewBirthday"),
  quote: document.getElementById("previewQuote"),
};

const resetButton = document.getElementById("resetButton");

function valueOrDash(value) {
  const trimmed = value.trim();
  return trimmed ? trimmed : "-";
}

function renderPreview() {
  preview.name.textContent = valueOrDash(fields.name.value);
  preview.job.textContent = valueOrDash(fields.job.value);
  preview.model.textContent = valueOrDash(fields.model.value);
  preview.birthday.textContent = valueOrDash(fields.birthday.value);

  const quote = fields.quote.value.trim();
  preview.quote.textContent = quote ? `“${quote}”` : "“”";
}

Object.values(fields).forEach((field) => {
  field.addEventListener("input", renderPreview);
});

resetButton.addEventListener("click", () => {
  Object.values(fields).forEach((field) => {
    field.value = "";
  });

  renderPreview();
});

renderPreview();
