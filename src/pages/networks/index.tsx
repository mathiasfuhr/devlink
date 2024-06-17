import { FormEvent, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { db } from "../../services/firebaseConnection";
import { setDoc, doc, getDoc } from "firebase/firestore";

export function Networks() {
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [git, setGit] = useState("");

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setLinkedin(snapshot.data()?.linkedin);
          setInstagram(snapshot.data()?.instagram);
          setGit(snapshot.data()?.git);
        }
      });
    }
    loadLinks();
  }, []);

  function handleRegister(e: FormEvent) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      linkedin: linkedin,
      instagram: instagram,
      git: git,
    })
      .then(() => {
        console.log("CADASTRADOS COM SUCESSO!");
      })
      .catch((error) => {
        console.log("ERRO AO SALVAR" + error);
      });
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />
      <h1 className="text-white text-2xl font-medium mt-8 mb-4">
        Minhas redes sociais
      </h1>
      <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
        <label className="text-white font-medium mt-2 mb-2">
          Link do Linkedin
        </label>
        <Input
          placeholder="Digite a url do linkedin"
          type="url"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />
        <label className="text-white font-medium mt-2 mb-2">
          Link do Instagram
        </label>
        <Input
          placeholder="Digite a url do instagram"
          type="url"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
        <label className="text-white font-medium mt-2 mb-2">
          Link do Git/Hub
        </label>
        <Input
          placeholder="Digite a url do gitHub"
          type="url"
          value={git}
          onChange={(e) => setGit(e.target.value)}
        />
        <button
          className="text-white bg-blue-600 h-9 rounded-md flex items-center justify-center mb-7 font-medium "
          type="submit"
        >
          Salvar Links
        </button>
      </form>
    </div>
  );
}
