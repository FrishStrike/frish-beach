export default function readDataFromFile(file: Blob) {
  return new Promise<string>((res) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === "string") res(reader.result);
    };
  });
}
