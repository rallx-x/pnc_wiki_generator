const STORAGE_KEY = "pnc_wiki_generator_autosave";
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

function getFormData() {
  return {
    name: fields.name.value,
    job: fields.job.value,
    model: fields.model.value,
    birthday: fields.birthday.value,
    quote: fields.quote.value,
  };
}

function setFormData(data) {
  fields.name.value = data.name || "";
  fields.job.value = data.job || "";
  fields.model.value = data.model || "";
  fields.birthday.value = data.birthday || "";
  fields.quote.value = data.quote || "";
}

function saveToLocalStorage() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(getFormData())
  );
}

function loadFromLocalStorage() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) return;

  try {
    setFormData(JSON.parse(saved));
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
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
  field.addEventListener("input", () => {
  renderPreview();
  saveToLocalStorage();
});

resetButton.addEventListener("click", () => {
  Object.values(fields).forEach((field) => {
    field.value = "";
  });

  localStorage.removeItem(STORAGE_KEY);
  renderPreview();
});

  renderPreview();
});

loadFromLocalStorage();
renderPreview();
