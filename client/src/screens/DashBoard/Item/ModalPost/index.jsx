import { Button, Form, Modal } from "react-bootstrap";

const ModalPost = (props) => {
  const { visible, onClose, onChangeForm, postForm, onPost, isAdd } = props;
  const { title, price, ngayMua, img, status } = postForm;
  console.log("🚀 ~ ModalPost ~ ngayMua:", ngayMua)
  return (
    <Modal show={visible} onHide={onClose} className="primary" backdrop>
      <Modal.Body>
        <Form id="modalForm" onSubmit={onPost}>
          <Form.Group className="mb-3" controlId="formTitleBook">
            <Form.Label>Tên sách</Form.Label>
            <Form.Control
              onChange={onChangeForm}
              type="text"
              name="title"
              value={title}
              placeholder="Nhập tên sách"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPriceBook">
            <Form.Label>Giá mua</Form.Label>
            <Form.Control
              onChange={onChangeForm}
              type="number"
              name="price"
              placeholder="Nhập giá mua"
              value={price}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDateBoughtBook">
            <Form.Label>Ngày mua</Form.Label>
            <Form.Control
              type="date"
              name="ngayMua"
              value={ngayMua}
              defaultValue={ngayMua}
              onChange={onChangeForm}
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>URL ảnh bìa</Form.Label>
            <Form.Control
              type="text"
              name="img"
              value={img}
              onChange={onChangeForm}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formStatusBook">
            <Form.Label>Tình trạng đọc</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="status"
              value={status}
              onChange={onChangeForm}
            >
              <option>Select status</option>
              <option value="To Read">TO READ</option>
              <option value="Reading">READDING</option>
              <option value="Done">DONE</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          className="bg-blue-600"
          type="submit"
          form="modalForm"
        >
          {isAdd ? "Thêm" : "Chỉnh sửa"}
        </Button>
        <Button variant="secondary" className="bg-gray-600" onClick={onClose}>
          Hủy
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalPost;
