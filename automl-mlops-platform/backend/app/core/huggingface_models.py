from transformers import (
    AutoModelForSequenceClassification,
    AutoTokenizer,
    pipeline,
    AutoModelForTokenClassification,
    AutoModelForQuestionAnswering,
    AutoModelForMaskedLM,
    AutoModelForCausalLM,
    AutoModelForImageClassification,
    AutoFeatureExtractor,
)

MODELS = {
    "sentiment-analysis": ("distilbert-base-uncased-finetuned-sst-2-english", AutoModelForSequenceClassification),
    "named-entity-recognition": ("dbmdz/bert-large-cased-finetuned-conll03-english", AutoModelForTokenClassification),
    "question-answering": ("distilbert-base-cased-distilled-squad", AutoModelForQuestionAnswering),
    "text-generation": ("gpt2", AutoModelForCausalLM),
    "fill-mask": ("bert-base-uncased", AutoModelForMaskedLM),
    "summarization": ("facebook/bart-large-cnn", AutoModelForSequenceClassification),
    "translation": ("Helsinki-NLP/opus-mt-en-fr", AutoModelForSequenceClassification),
    "text-classification": ("distilbert-base-uncased-finetuned-sst-2-english", AutoModelForSequenceClassification),
    "zero-shot-classification": ("facebook/bart-large-mnli", AutoModelForSequenceClassification),
    "image-classification": ("google/vit-base-patch16-224", AutoModelForImageClassification),
}

def load_model(task):
    model_name, model_class = MODELS[task]
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = model_class.from_pretrained(model_name)
    
    if task == "image-classification":
        feature_extractor = AutoFeatureExtractor.from_pretrained(model_name)
        return pipeline(task, model=model, feature_extractor=feature_extractor)
    
    return pipeline(task, model=model, tokenizer=tokenizer)

def get_available_models():
    return list(MODELS.keys())