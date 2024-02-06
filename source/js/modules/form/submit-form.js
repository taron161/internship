import {baseSuccessCallback} from '../../vendor/form-validate/callback';
import {Form} from '../../vendor/form-validate/form';
import {modals} from '../../vendor/modals/init-modals';

const FORM_MODAL_NAME = 'form';
const MESSAGE_MODAL_NAME = 'message';

const form = new Form();

const modalForm = document.querySelector('[data-form="modal"] form');

const feedbackForm = document.querySelector('[data-form="feedback"] form');

export const submitForm = () => {
  if (modalForm) {
    modalForm.addEventListener('submit', (evt) => {

      if (form.validateForm(modalForm)) {
        baseSuccessCallback(evt, modalForm, closeFormModal);
        openModal(MESSAGE_MODAL_NAME, 1000);
        closeModal(MESSAGE_MODAL_NAME, 3000);
      }
    });
  }

  if (feedbackForm) {
    feedbackForm.addEventListener('submit', (evt) => {
      if (form.validateForm(feedbackForm)) {
        baseSuccessCallback(evt, feedbackForm, resetFeedbackForm);
        openModal(MESSAGE_MODAL_NAME, 1000);
        closeModal(MESSAGE_MODAL_NAME, 3000);
      }
    });
  }
};

function resetFeedbackForm() {
  form.reset(feedbackForm);
}

function closeFormModal() {
  form.reset(modalForm);
  closeModal(FORM_MODAL_NAME, 300);
}

function closeModal(name, delay = 0) {
  setTimeout(() => {
    modals.close(name);
  }, delay);
}

function openModal(name, delay = 0) {
  setTimeout(() => {
    modals.open(name);
  }, delay);
}
