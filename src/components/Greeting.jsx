import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {
    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

    const [greeting, setGreeting] = useState(messages[0]);

    return (
        <div class="flex items-center gap-3">
            <button class="btn btn-primary btn-square" onClick={() => setGreeting(randomMessage())}>
                <span class="loading loading-spinner"></span>
            </button>
            <h3 class="text-lg">{greeting}, lots of blog things happening here</h3>
        </div>
    );
}