import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'


function Add({ handleAdd }) {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [posterUrl, setPosterUrl] = useState('./519xOk+VYDL._AC_SY741_.jpg');
    const [rate, setRate] = useState('');
    const [fullDescription, setFullDescription] = useState('');
    const [trailerLink, setTrailerLink] = useState('');

    const addMovie = () => {
        return (
            handleAdd({ title, posterUrl, description, rate, fullDescription, trailerLink }),
            setShow(false),
            setTitle(""),
            setDescription(""),
            setPosterUrl("./519xOk+VYDL._AC_SY741_.jpg"),
            setRate("")
        )
    }

    return (
        <>
            <Button variant="primary" onClick={() => setShow(true)}>
                Add a Movie
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"

            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Movie
          </Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-primary">
                    <Form.Group>
                        <Form.Label>Movie Title</Form.Label>
                        <Form.Control placeholder="Movie Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Poster source</Form.Label>
                        <Form.Control placeholder="Poster source" value={posterUrl} onChange={(e) => setPosterUrl(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="moviedescription">
                        <Form.Label>Movie Short Description</Form.Label>
                        <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="moviedescription">
                        <Form.Label>Movie Full Description</Form.Label>
                        <Form.Control as="textarea" rows={3} value={fullDescription} onChange={(e) => setFullDescription(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Trailer Link</Form.Label>
                        <Form.Control placeholder="Trailer Link" value={trailerLink} onChange={(e) => setTrailerLink(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rate</Form.Label>
                        <div className="stars">
                            <input class="star star-5" id="star-5" type="radio" value="5" name="star" onChange={(e) => setRate(e.target.value)} />
                            <label class="star star-5" for="star-5"></label>
                            <input class="star star-4" id="star-4" type="radio" value="4" name="star" onChange={(e) => setRate(e.target.value)} />
                            <label class="star star-4" for="star-4"></label>
                            <input class="star star-3" id="star-3" type="radio" value="3" name="star" onChange={(e) => setRate(e.target.value)} />
                            <label class="star star-3" for="star-3"></label>
                            <input class="star star-2" id="star-2" type="radio" value="2" name="star" onChange={(e) => setRate(e.target.value)} />
                            <label class="star star-2" for="star-2"></label>
                            <input class="star star-1" id="star-1" type="radio" value="1" name="star" onChange={(e) => setRate(e.target.value)} />
                            <label class="star star-1" for="star-1"></label>
                        </div>
                    </Form.Group>
                    <Button variant="info" type="submit" className="mr-2" onClick={addMovie}>
                        Add
                    </Button>
                    <Button variant="danger" onClick={() => setShow(false)}>
                        Cancel
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Add

