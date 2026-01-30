/**
 * Prism.js - Lightweight, extensible syntax highlighter
 * Customized for RamdaJS Journal
 */

(function() {
    // Prism configuration for Ramda.js specific highlighting
    if (typeof Prism === 'undefined') {
        // Load Prism from CDN if not already loaded
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
        script.onload = initPrism;
        document.head.appendChild(script);
        
        const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css';
        document.head.appendChild(style);
    } else {
        initPrism();
    }
    
    function initPrism() {
        // Add Ramda.js specific language extensions
        Prism.languages.ramda = Prism.languages.extend('javascript', {
            // Highlight Ramda functions
            'ramda-function': {
                pattern: /\b(R\.\w+|curry|pipe|compose|map|filter|reduce|prop|propEq|path|lens|view|set|over)\b/,
                alias: 'function'
            },
            
            // Highlight lambda symbols
            'lambda': {
                pattern: /λ|=>/,
                alias: 'operator'
            },
            
            // Highlight functional programming terms
            'fp-term': {
                pattern: /\b(currying|immutability|composition|functor|monad|applicative|transducer)\b/i,
                alias: 'keyword'
            }
        });
        
        // Apply syntax highlighting to all code blocks
        document.querySelectorAll('pre code').forEach((block) => {
            // Determine language from class or content
            let language = 'javascript';
            const className = block.className;
            
            if (className.includes('language-')) {
                language = className.replace('language-', '').split(' ')[0];
            } else if (block.textContent.includes('R.')) {
                language = 'ramda';
            }
            
            // Set language class
            block.className = `language-${language}`;
            
            // Apply Prism highlighting
            Prism.highlightElement(block);
        });
        
        // Add copy buttons dynamically
        addCopyButtons();
        
        // Initialize line numbers if needed
        initLineNumbers();
    }
    
    function addCopyButtons() {
        document.querySelectorAll('pre').forEach((pre) => {
            // Skip if already has copy button
            if (pre.querySelector('.copy-button')) return;
            
            const button = document.createElement('button');
            button.className = 'copy-button';
            button.innerHTML = '<i class="far fa-copy"></i>';
            button.setAttribute('aria-label', 'Copy code');
            button.setAttribute('title', 'Copy code');
            
            button.addEventListener('click', function() {
                const code = pre.querySelector('code').textContent;
                copyToClipboard(code);
                
                // Visual feedback
                this.innerHTML = '<i class="fas fa-check"></i>';
                this.classList.add('copied');
                
                setTimeout(() => {
                    this.innerHTML = '<i class="far fa-copy"></i>';
                    this.classList.remove('copied');
                }, 2000);
            });
            
            pre.style.position = 'relative';
            pre.appendChild(button);
        });
    }
    
    function initLineNumbers() {
        const lineNumberedBlocks = document.querySelectorAll('pre.line-numbers');
        
        lineNumberedBlocks.forEach((pre) => {
            const code = pre.querySelector('code');
            const lines = code.textContent.split('\n').length - 1;
            
            // Add line numbers wrapper
            const lineNumbers = document.createElement('div');
            lineNumbers.className = 'line-numbers';
            
            for (let i = 1; i <= lines; i++) {
                const lineNumber = document.createElement('span');
                lineNumber.textContent = i;
                lineNumbers.appendChild(lineNumber);
            }
            
            pre.insertBefore(lineNumbers, code);
        });
    }
    
    function copyToClipboard(text) {
        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(text);
        } else {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            
            try {
                document.execCommand('copy');
                return Promise.resolve();
            } catch (err) {
                return Promise.reject(err);
            } finally {
                textArea.remove();
            }
        }
    }
    
    // Export for use in other modules
    window.PrismCustom = {
        init: initPrism,
        addCopyButtons,
        initLineNumbers
    };
})();
