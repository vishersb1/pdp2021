const uploadImage = async ({ event, setImage }) => {
  const files = event.target.files;
  const data = new FormData();
  data.append("file", files[0]);
  data.append("upload_preset", "newsimages");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dlh9oz3k9/image/upload",
    {
      method: "POST",
      body: data,
    }
  );

  const file = await res.json();
  setImage(file.url);
};

export default uploadImage;
