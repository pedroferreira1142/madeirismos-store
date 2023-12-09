import {Button, Modal, ModalBody} from 'reactstrap';

export const ProductModal = ({modalProduct, setModalProduct}) => {
    return (
        <Modal isOpen={modalProduct} toggle={() => setModalProduct(false)} centered>
            <div className="modal-header justify-content-center">
                <button className="close" type="button" onClick={() => setModalProduct(false)}>
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                </button>
                <h4 className="title title-up">Modal title</h4>
            </div>
            <ModalBody>
                <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                    the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean. A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                </p>
            </ModalBody>
            <div className="modal-footer">
                <Button color="default" type="button">
                    Nice Button
                </Button>
                <Button color="danger" type="button" onClick={() => setModalProduct(false)}>
                    Close
                </Button>
            </div>
        </Modal>
    );
};
