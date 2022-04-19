import React, { useState, useEffect } from "react";
import LinkForm from "./LinkForm";
import { db } from "../firebase";
import {
  collection,
  doc,
  setDoc,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";

const Links = () => {
  const [links, setLinks] = useState([]);

  const addOrEditLink = async (linkObject) => {
    const linkRef = collection(db, "links");
    await setDoc(doc(linkRef), linkObject);
    return true;
  };

  const getLinks = () => {
    const q = collection(db, "links");
    onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setLinks(docs);
    });
  };

  const onDeleteLink = async (id) => {
    if (window.confirm("Sure?")) {
      await deleteDoc(doc(db, "links", id));
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div>
      <LinkForm addOrEdit={addOrEditLink} />
      <div className="container mt-2 px-0">
        <div className="col-md-8">
          {links.map((link, index) => (
            <div className="card p-2 mb-2" key={index}>
              <h4>{link.name}</h4>
              <p>{link.description}</p>
              <a target="_blank" href={link.url}>
                Go to website
              </a>
              <button
                className="btn btn-danger my-2"
                onClick={() => onDeleteLink(link.id)}
              >
                <i className="bi bi-trash bg-danger" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Links;
