const quizzes = [
    // Quiz 1: Basics of Computer Organization
    { 
        question: "What does the term 'clock cycle' refer to in a processor?", 
        options: ["The time taken to execute an instruction", "The speed of the ALU", "The time between two consecutive pulses of the processor clock", "The memory access time"], 
        answer: "The time between two consecutive pulses of the processor clock" 
    },
    { 
        question: "In which type of computer architecture does the CPU fetch both data and instructions from a common memory?", 
        options: ["Harvard Architecture", "Von Neumann Architecture", "RISC Architecture", "CISC Architecture"], 
        answer: "Von Neumann Architecture" 
    },
    { 
        question: "Which register stores the address of the next instruction to be executed?", 
        options: ["MAR", "PC", "IR", "MDR"], 
        answer: "PC" 
    },
    { 
        question: "What is the purpose of the Instruction Register (IR)?", 
        options: ["Holds data fetched from memory", "Holds the address of the next instruction", "Stores the instruction currently being executed", "Controls the clock speed"], 
        answer: "Stores the instruction currently being executed" 
    },
    { 
        question: "In a multiprocessor system, processors share:", 
        options: ["The same ALU", "The same memory", "The same instruction set", "The same control unit"], 
        answer: "The same memory" 
    },

    // Quiz 2: Instruction Set & Addressing Modes
    { 
        question: "Which of the following is NOT an addressing mode?", 
        options: ["Direct", "Indirect", "Indexed", "Pipeline"], 
        answer: "Pipeline" 
    },
    { 
        question: "In which addressing mode is the operand explicitly stated in the instruction?", 
        options: ["Direct", "Indirect", "Immediate", "Indexed"], 
        answer: "Immediate" 
    },
    { 
        question: "The instruction MOV R1, 5000H is an example of which addressing mode?", 
        options: ["Immediate", "Direct", "Register", "Indirect"], 
        answer: "Direct" 
    },
    { 
        question: "What is the difference between a shift and a rotate operation?", 
        options: ["Rotate moves bits in a loop, while shift moves them in one direction", "Shift and rotate are identical operations", "Rotate only applies to memory locations, while shift applies to registers", "Shift moves bits to both left and right simultaneously"], 
        answer: "Rotate moves bits in a loop, while shift moves them in one direction" 
    },

    // Quiz 3: Processor Organization & Microprogramming
    { 
        question: "In microprogrammed control, control signals are stored in:", 
        options: ["ALU", "Control store (ROM)", "RAM", "Cache memory"], 
        answer: "Control store (ROM)" 
    },
    { 
        question: "Hardwired control is typically used in:", 
        options: ["CISC processors", "RISC processors", "Microcontrollers", "Multiprocessors"], 
        answer: "RISC processors" 
    },
    { 
        question: "The control unit in a processor:", 
        options: ["Executes arithmetic and logical operations", "Controls data movement between registers", "Fetches and decodes instructions", "Stores intermediate results"], 
        answer: "Fetches and decodes instructions" 
    },

    // Quiz 4: Instruction Cycle & Memory Organization
    { 
        question: "The instruction cycle consists of which steps?", 
        options: ["Decode → Execute → Fetch → Store", "Fetch → Decode → Execute → Store", "Fetch → Execute → Decode → Store", "Fetch → Store → Decode → Execute"], 
        answer: "Fetch → Decode → Execute → Store" 
    },
    { 
        question: "The Program Counter (PC) is incremented during which phase?", 
        options: ["Fetch", "Decode", "Execute", "Writeback"], 
        answer: "Fetch" 
    },
    { 
        question: "Which type of memory is non-volatile?", 
        options: ["RAM", "Cache", "ROM", "Registers"], 
        answer: "ROM" 
    },
    { 
        question: "The fastest memory in a computer system is:", 
        options: ["Cache", "RAM", "Hard Disk", "Registers"], 
        answer: "Registers" 
    },
    { 
        question: "What is the purpose of a memory buffer register (MBR)?", 
        options: ["Holds data before being transferred to memory", "Holds the address of the next instruction", "Controls access to the system bus", "Stores the stack pointer"], 
        answer: "Holds data before being transferred to memory" 
    },

    // True/False Questions
    { 
        question: "The control unit is responsible for performing arithmetic operations.", 
        options: ["True", "False"], 
        answer: "False" 
    },
    { 
        question: "Pipelining allows multiple instructions to be executed simultaneously in stages.", 
        options: ["True", "False"], 
        answer: "True" 
    },
    { 
        question: "A stack operates in Last In First Out (LIFO) order.", 
        options: ["True", "False"], 
        answer: "True" 
    },
    { 
        question: "Cache memory is slower than RAM but faster than registers.", 
        options: ["True", "False"], 
        answer: "False" 
    },
    { 
        question: "RISC processors have a larger instruction set than CISC processors.", 
        options: ["True", "False"], 
        answer: "False" 
    },

    // Fill in the Blanks
    { 
        question: "The __________ holds the next instruction to be executed.", 
        type: "fill", 
        answer: "Program Counter (PC)" 
    },
    { 
        question: "The process of moving data from RAM to the CPU register is called __________.", 
        type: "fill", 
        answer: "Memory Transfer" 
    },
    { 
        question: "In an instruction cycle, the first step is always __________.", 
        type: "fill", 
        answer: "Fetch" 
    },
    { 
        question: "A __________ bus carries control signals between different parts of the CPU.", 
        type: "fill", 
        answer: "Control" 
    },
    { 
        question: "The __________ register temporarily holds data read from or written to memory.", 
        type: "fill", 
        answer: "Memory Buffer Register (MBR)" 
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizzes.forEach((quiz, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `${index + 1}. ${quiz.question}`;
        questionDiv.appendChild(questionTitle);

        if (quiz.type === "fill") {
            const inputField = document.createElement('input');
            inputField.type = "text";
            inputField.name = `question-${index}`;
            inputField.dataset.answer = quiz.answer;
            questionDiv.appendChild(inputField);
        } else {
            const optionsList = document.createElement('ul');
            optionsList.classList.add('options');
            quiz.options.forEach(option => {
                const listItem = document.createElement('li');
                const optionInput = document.createElement('input');
                optionInput.type = "radio";
                optionInput.name = `question-${index}`;
                optionInput.value = option;
                listItem.appendChild(optionInput);
                listItem.appendChild(document.createTextNode(option));
                optionsList.appendChild(listItem);
            });
            questionDiv.appendChild(optionsList);
        }

        quizContainer.appendChild(questionDiv);
    });
}

function submitQuiz() {
    let score = 0;
    quizzes.forEach((quiz, index) => {
        if (quiz.type === "fill") {
            const userAnswer = document.querySelector(`input[name='question-${index}']`).value.trim();
            if (userAnswer.toLowerCase() === quiz.answer.toLowerCase()) {
                score++;
            }
        } else {
            const selectedOption = document.querySelector(`input[name='question-${index}']:checked`);
            if (selectedOption && selectedOption.value === quiz.answer) {
                score++;
            }
        }
    });

    document.getElementById('result-container').style.display = 'block';
    document.getElementById('result-container').innerHTML = `<h2>Your Score: ${score}/${quizzes.length}</h2>`;
}

window.onload = loadQuiz;
