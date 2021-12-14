import React, {useState, useEffect} from 'react'

const AddRecipes = () => {
    const [moviel, setMoviel] = useState(null);
    return (
        <>
            <form className="form_new_movie">
              <fieldset className="card_new_movie">
                <legend className="legend">Formulaire d'ajout</legend>
                <div className="title_and_date">
                  <span>
                    <label>Titre:</label>
                    <input type="text"  required />
                  </span>
                  <span>
                    <label>Description:</label>
                    <input type="textarea"  required/>
                  </span>
                </div>
                <div className="categories_new_movie">
                  <span>Niveau de Difficulté:</span>
                  <select required>
                    <option value="Padawan">Padawan</option>
                    <option value="Jedi">Jedi</option>
                    <option value="Maitre">Maitre</option>
                  </select>
                </div>
                <div className="description_new_movie">
                  <label>Personne:</label>
                  <input
                    type="number" className="new_desc" required
                  />
                </div>
                <div className="description_new_movie">
                  <label>Temps de Preparation:</label>
                  <input
                    type="number" className="new_desc" required
                  />
                </div>
                <div>
                  <label>Photo de la recette</label>
                  <input
                    type="url"
                    width="20px"
                    height="20px"
                    alt="poster_movie_tnbd"


                  />
                </div>
                <div>
                  <h3>Les ingredients de la recette</h3>
                  <div>
                    <input type="number" required />
                    <span>
                        <select>
                            <option value="cl">cl</option>
                            <option value="mg">mg</option>
                            <option value=""></option>
                        </select>
                    </span>
                    <input type="text" />

                  </div>
                </div>
                <div>
                  <h3>Les étapes de préparations</h3>
                  <input type="text" alt="film" required/>
                </div>
                <button type="button" >
                  Enregistrer
                </button>
              </fieldset>
            </form>

        </>
    )
}

export default AddRecipes