import {baseSuccessCallback} from '../../vendor/form-validate/callback';
import {Form} from '../../vendor/form-validate/form';
import {modals} from '../../vendor/modals/init-modals';

const form = new Form();

const modalForm = document.querySelector('[data-form="modal"] form');

const feedbackForm = document.querySelector('[data-form="feedback"] form');

export const submitForm = () => {
  if (modalForm) {
    modalForm.addEventListener('submit', (evt) => {

      if (form.validateForm(modalForm)) {
        baseSuccessCallback(evt, modalForm, closeModal);
      }
    });
  }

  if (feedbackForm) {
    feedbackForm.addEventListener('submit', (evt) => {
      if (form.validateForm(feedbackForm)) {
        baseSuccessCallback(evt, feedbackForm, resetFeedbackForm);
      }
    });
  }
};

function resetFeedbackForm() {
  form.reset(feedbackForm);
}

function closeModal() {
  form.reset(modalForm);
  modals.close();
}
