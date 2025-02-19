// script.js
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', () => {
    const userText = userInput.value;
    if (userText) {
        appendMessage('You: ' + userText);
        userInput.value = '';
        getResponse(userText);
    }
});

function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getResponse(symptom) {
    let response = '';
    // Simple symptom analysis logic
    if (symptom.includes('fever')) {
        response = 'Possible causes: Flu, Infection. Medical advice: Stay hydrated. Consult a doctor if symptoms persist.';
    } else if (symptom.includes('headache')) {
        response = 'Possible causes: Stress, Dehydration. Medical advice: Rest and hydrate. Consult a doctor if severe.';
    } else if (symptom.includes('cough')) {
        response = "Possible causes: Common cold, Bronchitis, COVID-19.\nMedical advice: Drink warm fluids, use a humidifier. Consult a doctor if persistent.";
    } else if (symptom.includes('sore throat')) {
        response = "Possible causes: Viral infection, Strep throat.\nMedical advice: Gargle with saltwater, use throat lozenges. Consult a doctor if severe.";
    } else if (symptom.includes('runny nose')) {
        response = "Possible causes: Allergies, Cold, Sinus infection.\nMedical advice: Use a decongestant, stay hydrated.";
    } else if (symptom.includes('chest pain')) {
        response = "Possible causes: Heart issues, Acid reflux, Anxiety.\nMedical advice: Seek immediate medical attention if severe or persistent.";
    } else if (symptom.includes('shortness of breath')) {
        response = "Possible causes: Asthma, Pneumonia, Heart problems.\nMedical advice: Seek immediate medical care.";
    } else if (symptom.includes('fatigue')) {
        response = "Possible causes: Anemia, Stress, Thyroid issues.\nMedical advice: Maintain a healthy diet and sleep schedule.";
    } else if (symptom.includes('dizziness')) {
        response = "Possible causes: Low blood pressure, Dehydration, Inner ear issues.\nMedical advice: Rest, hydrate, and avoid sudden movements.";
    } else if (symptom.includes('vomiting')) {
        response = "Possible causes: Food poisoning, Infection, Motion sickness.\nMedical advice: Drink fluids to prevent dehydration.";
    } else if (symptom.includes('diarrhea')) {
        response = "Possible causes: Food poisoning, IBS, Infection.\nMedical advice: Drink ORS, avoid dairy, and rest.";
    } else if (symptom.includes('constipation')) {
        response = "Possible causes: Poor diet, Dehydration, Lack of fiber.\nMedical advice: Eat fiber-rich foods and drink plenty of water.";
    } else if (symptom.includes('stomach pain')) {
        response = "Possible causes: Indigestion, Ulcer, Appendicitis.\nMedical advice: Avoid spicy foods, drink water, and consult a doctor if severe.";
    } else if (symptom.includes('back pain')) {
        response = "Possible causes: Poor posture, Muscle strain.\nMedical advice: Apply heat/cold packs and maintain good posture.";
    } else if (symptom.includes('joint pain')) {
        response = "Possible causes: Arthritis, Inflammation.\nMedical advice: Take rest, do mild exercises, and consult a doctor.";
    } else if (symptom.includes('nausea')) {
        response = "Possible causes: Motion sickness, Pregnancy, Food poisoning.\nMedical advice: Take ginger tea and avoid greasy food.";
    } else if (symptom.includes('blurry vision')) {
        response = "Possible causes: Eye strain, Diabetes, Cataract.\nMedical advice: Reduce screen time, wear proper glasses, and consult an eye doctor.";
    } else if (symptom.includes('ear pain')) {
        response = "Possible causes: Ear infection, Wax buildup.\nMedical advice: Use warm compress. Consult a doctor if severe.";
    } else if (symptom.includes('skin rash')) {
        response = "Possible causes: Allergy, Eczema, Infection.\nMedical advice: Avoid allergens and keep skin moisturized.";
    } else if (symptom.includes('itchy eyes')) {
        response = "Possible causes: Allergy, Dry eyes.\nMedical advice: Use lubricating eye drops and avoid rubbing eyes.";
    } else if (symptom.includes('chills')) {
        response = "Possible causes: Fever, Infection.\nMedical advice: Keep warm and stay hydrated.";
    } else if (symptom.includes('night sweats')) {
        response = "Possible causes: Infection, Anxiety, Hormonal changes.\nMedical advice: Maintain a cool sleeping environment and consult a doctor if frequent.";
    } else if (symptom.includes('weight loss')) {
        response = "Possible causes: Thyroid issues, Diabetes, Cancer.\nMedical advice: Consult a doctor if unexplained.";
    } else if (symptom.includes('weight gain')) {
        response = "Possible causes: Thyroid disorder, Overeating, Stress.\nMedical advice: Maintain a balanced diet and exercise regularly.";
    } else if (symptom.includes('loss of appetite')) {
        response = "Possible causes: Depression, Stomach infection.\nMedical advice: Eat small, frequent meals and consult a doctor if persistent.";
    } else if (symptom.includes('heart palpitations')) {
        response = "Possible causes: Stress, Caffeine, Arrhythmia.\nMedical advice: Reduce caffeine, stay calm, and consult a doctor if severe.";
    } else if (symptom.includes('numbness')) {
        response = "Possible causes: Nerve issues, Stroke, Vitamin deficiency.\nMedical advice: Seek immediate medical attention if sudden or one-sided.";
    } else if (symptom.includes('tingling')) {
        response = "Possible causes: Poor circulation, Nerve compression.\nMedical advice: Change positions and do mild exercises.";
    } else if (symptom.includes('cold hands') || symptom.includes('cold feet')) {
        response = "Possible causes: Poor circulation, Raynaud’s disease.\nMedical advice: Keep warm and move frequently.";
    } else if (symptom.includes('bloating')) {
        response = "Possible causes: Gas, IBS, Food intolerance.\nMedical advice: Avoid gas-producing foods and eat slowly.";
    } else if (symptom.includes('acid reflux')) {
        response = "Possible causes: GERD, Spicy foods, Obesity.\nMedical advice: Avoid acidic foods and eat smaller meals.";
    } else if (symptom.includes('depression')) {
        response = "Possible causes: Mental health issues, Stress.\nMedical advice: Seek professional help and talk to a trusted person.";
    } else if (symptom.includes('anxiety')) {
        response = "Possible causes: Stress, Panic disorder.\nMedical advice: Practice deep breathing and relaxation techniques.";
    } else if (symptom.includes('memory loss')) {
        response = "Possible causes: Aging, Dementia, Stress.\nMedical advice: Keep mentally active and consult a doctor if progressive.";
    } else if (symptom.includes('insomnia')) {
        response = "Possible causes: Stress, Caffeine, Sleep disorder.\nMedical advice: Reduce screen time before bed and follow a sleep routine.";
    } else {
        response = "I am not sure about that symptom. Please consult a healthcare professional.";
    }

    appendMessage('Bot: ' + response);
}
