//AsnwerOptions type describes the structure foreach answer option
type AnswerOptions = {
    answerVocab: string;
    isCorrect: boolean;
};
//This type describes a single question, it has questionVocab property
//and answerOptions array of type AnswerOptions[]
type Question ={
    questionVocab: string;
    answerOptions: AnswerOptions[];
};

//questionsTwo is declared with the type 'Question[] because it is an array of Question objects

    const questions: Question[] = [
    {
        questionVocab: 'Vatten',
        answerOptions: [
            {answerVocab: 'vet' , isCorrect: false},
            {answerVocab: 'water', isCorrect: true},
            {answerVocab: 'soap' , isCorrect: false},
            {answerVocab: 'shower' , isCorrect: false},
        ],
    },
    {
        questionVocab: 'Flicka',
        answerOptions: [
            {answerVocab: 'girl' , isCorrect: true},
            {answerVocab: 'flicker', isCorrect: false},
            {answerVocab: 'find' , isCorrect: false},
            {answerVocab: 'boy' , isCorrect: false},
        ],
    },
    {
        questionVocab: 'Boy',
        answerOptions: [
            {answerVocab: 'flicka' , isCorrect: false},
            {answerVocab: 'pojke', isCorrect: true},
            {answerVocab: 'punkt' , isCorrect: false},
            {answerVocab: 'kvinna' , isCorrect: false},
        ],
    },
    {
        questionVocab: 'Man',
        answerOptions: [
            {answerVocab: 'one' , isCorrect: false},
            {answerVocab: 'man', isCorrect: true},
            {answerVocab: 'but' , isCorrect: false},
            {answerVocab: 'mango' , isCorrect: false},
        ],
    },
    {
        questionVocab: 'Dog',
        answerOptions: [
            {answerVocab: 'katt' , isCorrect: false},
            {answerVocab: 'valp', isCorrect: false},
            {answerVocab: 'hund' , isCorrect: true},
            {answerVocab: 'fetch' , isCorrect: false},
        ],
    },
    {
        questionVocab: 'Cat',
        answerOptions: [
            {answerVocab: 'cat' , isCorrect: false},
            {answerVocab: 'kattmynta', isCorrect: false},
            {answerVocab: 'hund' , isCorrect: false},
            {answerVocab: 'katt' , isCorrect: true},
        ],
    },
    {
        questionVocab: 'Ordentlig',
        answerOptions: [
            {answerVocab: 'word' , isCorrect: false},
            {answerVocab: 'order', isCorrect: false},
            {answerVocab: 'orderly' , isCorrect: true},
            {answerVocab: 'ordning' , isCorrect: false},
        ],
    },
    {
        questionVocab: 'Kaffe',
        answerOptions: [
            {answerVocab: 'cafe' , isCorrect: false},
            {answerVocab: 'cafeteria', isCorrect: false},
            {answerVocab: 'car' , isCorrect: false},
            {answerVocab: 'coffee' , isCorrect: true},
        ],
    },
    {
        questionVocab: 'Fika',
        answerOptions: [
            {answerVocab: 'fiction' , isCorrect: false},
            {answerVocab: 'coffee time', isCorrect: true},
            {answerVocab: 'cake' , isCorrect: false},
            {answerVocab: 'fist' , isCorrect: false},
        ],
    },
    {
        questionVocab: 'Ost',
        answerOptions: [
            {answerVocab: 'cheese' , isCorrect: true},
            {answerVocab: 'Austria', isCorrect: false},
            {answerVocab: 'host' , isCorrect: false},
            {answerVocab: 'milk' , isCorrect: false},
        ],
    }
];


export default questions;