document.addEventListener('DOMContentLoaded', function() {
    const terminalBody = document.getElementById('terminal-body');
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    const progressBarFill = document.createElement('div');
    progressBarFill.classList.add('progress-bar-fill');
    progressBar.appendChild(progressBarFill);

    const lines = [
        'Initializing Grepe creation...',
        'Loading assets...',
        'Compiling code...',
        'Connecting to blockchain...',
        'Synchronizing nodes...',
        'Deploying smart contract...',
        'Generating grapes...',
        'Grepe creation complete.'
    ];
    const gibberish = [
        '%%%###$$$@@@',
        '!!!@@@###%%%$$$',
        '****&&&^^^%%%###',
        '+++==--!!$$$###'
    ];
    let lineIndex = 0;
    let gibberishIndex = 0;

    function addLine() {
        if (gibberishIndex < gibberish.length) {
            const p = document.createElement('p');
            p.classList.add('terminal-line');
            p.textContent = gibberish[gibberishIndex];
            terminalBody.appendChild(p);
            gibberishIndex++;
            setTimeout(addLine, 1000);
        } else if (lineIndex < lines.length) {
            const p = document.createElement('p');
            p.classList.add('terminal-line');
            p.textContent = lines[lineIndex];
            terminalBody.appendChild(p);
            terminalBody.scrollTop = terminalBody.scrollHeight; // Smooth scrolling
            lineIndex++;
            setTimeout(addLine, 2000);
        } else {
            terminalBody.appendChild(progressBar);
            fillProgressBar();
        }
    }

    function fillProgressBar() {
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    terminalBody.innerHTML = '';
                    lineIndex = 0;
                    gibberishIndex = 0;
                    progressBarFill.style.width = '0';
                    addLine();
                }, 2000);
            } else {
                width++;
                progressBarFill.style.width = width + '%';
            }
        }, 50);
    }

    addLine();

    const clickableElements = document.querySelectorAll('a, button');

    clickableElements.forEach(element => {
        element.addEventListener('click', function(event) {
            createJuiceSquirt(event.pageX, event.pageY);
        });
    });

    function createJuiceSquirt(x, y) {
        for (let i = 0; i < 10; i++) { // Create multiple squirts for a better effect
            const squirt = document.createElement('div');
            squirt.classList.add('squirt');
            document.body.appendChild(squirt);

            const angle = Math.random() * 2 * Math.PI; // Random angle
            const distance = Math.random() * 50 + 50; // Random distance
            const offsetX = Math.cos(angle) * distance;
            const offsetY = Math.sin(angle) * distance;

            squirt.style.left = `${x}px`;
            squirt.style.top = `${y}px`;
            squirt.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

            squirt.addEventListener('animationend', function() {
                squirt.remove();
            });
        }
    }

    // Clipboard copy functionality
    const contractAddress = document.getElementById('contract-address');
    const copiedNotification = document.getElementById('copied-notification');

    contractAddress.addEventListener('click', function() {
        const address = contractAddress.textContent;
        navigator.clipboard.writeText(address).then(() => {
            copiedNotification.style.display = 'inline';
            setTimeout(() => {
                copiedNotification.style.display = 'none';
            }, 2000);
        });
    });
});
