from flask import Flask, request, jsonify, render_template
import os

app = Flask(__name__)

# Function to process symptom input
def get_symptom_response(symptom):
    symptom = symptom.lower()
    
    if "fever" in symptom:
        return "Possible causes: Flu, Infection, COVID-19.<br>Medical advice: Stay hydrated, take rest. Consult a doctor if persistent for 3+ days."
    elif "headache" in symptom:
        return "Possible causes: Stress, Dehydration, Migraine.<br>Medical advice: Rest, drink water, avoid screen time. Seek medical help if severe."
    elif "cough" in symptom:
        return "Possible causes: Common cold, Bronchitis, COVID-19.<br>Medical advice: Drink warm fluids, use a humidifier. Consult a doctor if persistent."
    elif "chest pain" in symptom:
        response = "Possible causes: Heart issues, Acid reflux, Anxiety.<br>Medical advice: Seek immediate medical attention if severe or persistent."
    elif "shortness of breath" in symptom:
        response = "Possible causes: Asthma, Pneumonia, Heart problems.<br>Medical advice: Seek immediate medical care."
    elif "fatigue" in symptom:
        response = "Possible causes: Anemia, Stress, Thyroid issues.<br>Medical advice: Maintain a healthy diet and sleep schedule."
    elif "dizziness" in symptom:
        response = "Possible causes: Low blood pressure, Dehydration, Inner ear issues.<br>Medical advice: Rest, hydrate, and avoid sudden movements."
    elif "vomiting" in symptom:
        response = "Possible causes: Food poisoning, Infection, Motion sickness.<br>Medical advice: Drink fluids to prevent dehydration."
    elif "diarrhea" in symptom:
        response = "Possible causes: Food poisoning, IBS, Infection.<br>Medical advice: Drink ORS, avoid dairy, and rest."
    elif "constipation" in symptom:
        response = "Possible causes: Poor diet, Dehydration, Lack of fiber.<br>Medical advice: Eat fiber-rich foods and drink plenty of water."
    elif "stomach pain" in symptom:
        response = "Possible causes: Indigestion, Ulcer, Appendicitis.<br>Medical advice: Avoid spicy foods, drink water, and consult a doctor if severe."
    elif "back pain" in symptom:
        response = "Possible causes: Poor posture, Muscle strain.<br>Medical advice: Apply heat/cold packs and maintain good posture."
    elif "joint pain" in symptom:
        response = "Possible causes: Arthritis, Inflammation.<br>Medical advice: Take rest, do mild exercises, and consult a doctor."
    elif "nausea" in symptom:
        response = "Possible causes: Motion sickness, Pregnancy, Food poisoning.<br>Medical advice: Take ginger tea and avoid greasy food."
    elif "blurry vision" in symptom:
        response = "Possible causes: Eye strain, Diabetes, Cataract.<br>Medical advice: Reduce screen time, wear proper glasses, and consult an eye doctor."
    elif "ear pain" in symptom:
        response = "Possible causes: Ear infection, Wax buildup.<br>Medical advice: Use warm compress. Consult a doctor if severe."
    elif "skin rash" in symptom:
        response = "Possible causes: Allergy, Eczema, Infection.<br>Medical advice: Avoid allergens and keep skin moisturized."
    elif "itchy eyes" in symptom:
        response = "Possible causes: Allergy, Dry eyes.<br>Medical advice: Use lubricating eye drops and avoid rubbing eyes."
    elif "chills" in symptom:
        response = "Possible causes: Fever, Infection.<br>Medical advice: Keep warm and stay hydrated."
    elif "night sweats" in symptom:
        response = "Possible causes: Infection, Anxiety, Hormonal changes.<br>Medical advice: Maintain a cool sleeping environment and consult a doctor if frequent."
    elif "weight loss" in symptom:
        response = "Possible causes: Thyroid issues, Diabetes, Cancer.<br>Medical advice: Consult a doctor if unexplained."
    elif "weight gain" in symptom:
        response = "Possible causes: Thyroid disorder, Overeating, Stress.<br>Medical advice: Maintain a balanced diet and exercise regularly."
    elif "loss of appetite" in symptom:
        response = "Possible causes: Depression, Stomach infection.<br>Medical advice: Eat small, frequent meals and consult a doctor if persistent."
    elif "heart palpitations" in symptom:
        response = "Possible causes: Stress, Caffeine, Arrhythmia.<br>Medical advice: Reduce caffeine, stay calm, and consult a doctor if severe."
    elif "numbness" in symptom:
        response = "Possible causes: Nerve issues, Stroke, Vitamin deficiency.<br>Medical advice: Seek immediate medical attention if sudden or one-sided."
    elif "tingling" in symptom:
        response = "Possible causes: Poor circulation, Nerve compression.<br>Medical advice: Change positions and do mild exercises."
    elif "cold hands" in symptom or "cold feet" in symptom:
        response = "Possible causes: Poor circulation, Raynaud’s disease.<br>Medical advice: Keep warm and move frequently."
    elif "bloating" in symptom:
        response = "Possible causes: Gas, IBS, Food intolerance.<br>Medical advice: Avoid gas-producing foods and eat slowly."
    elif "acid reflux" in symptom:
        response = "Possible causes: GERD, Spicy foods, Obesity.<br>Medical advice: Avoid acidic foods and eat smaller meals."
    elif "depression" in symptom:
        response = "Possible causes: Mental health issues, Stress.<br>Medical advice: Seek professional help and talk to a trusted person."
    elif "anxiety" in symptom:
        response = "Possible causes: Stress, Panic disorder.<br>Medical advice: Practice deep breathing and relaxation techniques."
    elif "memory loss" in symptom:
        response = "Possible causes: Aging, Dementia, Stress.<br>Medical advice: Keep mentally active and consult a doctor if progressive."
    elif "insomnia" in symptom:
        response = "Possible causes: Stress, Caffeine, Sleep disorder.<br>Medical advice: Reduce screen time before bed and follow a sleep routine."
    else:
        response = "I am not sure about that symptom. Please consult a healthcare professional."

    return response


# API Endpoint to handle user requests
@app.route('/api/get_response', methods=['POST'])
def get_response():
    data = request.get_json()
    symptom = data.get("symptom", "")
    response = get_symptom_response(symptom)
    return jsonify({"response": response})

# Serve the frontend
@app.route('/')
def home():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True)
