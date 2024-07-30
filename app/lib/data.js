


export async function getImages () {
  const res = await fetch('http://localhost:3000/api/images');
  const body = await res.json()
  return body.images;
}

export async function getFamilyPortrait() {
  // const res = await fetch('http://localhost:3000/api/images');
  // const body = await res.json();
  // return body.images.filter(img => img.tag === "family-portrait");
  const images = await getImages();
  return images.filter(img => img.tag === "family-portrait")
}

export async function getTamasArt(){
  // const res = await fetch('http://localhost:3000/api/images');
  // const body = await res.json();
  // return body.images.filter(img => img.tag === "tamas-art");
  const images = await getImages();
  return images.filter(img => img.tag === "tamas-art");
}

