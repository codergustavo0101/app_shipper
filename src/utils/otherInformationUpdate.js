import OtherInformationService from '../services/OtherInformationService';

export const otherInformationUpdate = {
  async update(data, dispatch) {
    const promises = [];

    data.forEach(async item => {
      const {question, answer} = item;

      if (answer) {
        promises.push(
          OtherInformationService.updateOtherInformation({
            question,
            answer,
          }),
        );

        dispatch({
          type: 'SET_OTHER_INFORMATION_FIELD',
          payload: {
            field: question,
            value: answer,
          },
        });
      }
    });

    await Promise.all(promises);
  },
};
