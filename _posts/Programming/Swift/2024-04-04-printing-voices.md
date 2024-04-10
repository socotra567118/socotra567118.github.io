---
title: Swift TTS 사용 가능한 목소리 출력하기
date: 2024-04-05 05:32:00 +0900
categories: [Swift, TTS]
tags: [Swift, TTS]
published: false
---

```swift
import AVFoundation

let voices = AVSpeechSynthesisVoice.speechVoices()
for voice in voices {
    print("Language Code: \(voice.language), Name: \(voice.name), Identifier: \(voice.identifier)")
}
```

```text
...
Language Code: ko-KR, Name: Yuna, Identifier: com.apple.voice.premium.ko-KR.Yuna
Language Code: ko-KR, Name: Jian, Identifier: com.apple.voice.premium.ko-KR.Jina
Language Code: ko-KR, Name: Jian, Identifier: com.apple.voice.enhanced.ko-KR.Jina
Language Code: ko-KR, Name: Minsu, Identifier: com.apple.voice.enhanced.ko-KR.Minsu
Language Code: ko-KR, Name: Yuna, Identifier: com.apple.voice.enhanced.ko-KR.Yuna
Language Code: ko-KR, Name: Sora, Identifier: com.apple.voice.enhanced.ko-KR.Sora
Language Code: ko-KR, Name: Suhyun, Identifier: com.apple.voice.enhanced.ko-KR.Nuri
Language Code: ko-KR, Name: Suhyun, Identifier: com.apple.voice.compact.ko-KR.Nuri
Language Code: ko-KR, Name: Minsu, Identifier: com.apple.voice.compact.ko-KR.Minsu
Language Code: ko-KR, Name: Sora, Identifier: com.apple.voice.compact.ko-KR.Sora
Language Code: ko-KR, Name: Yuna, Identifier: com.apple.voice.compact.ko-KR.Yuna
Language Code: ko-KR, Name: Jian, Identifier: com.apple.voice.compact.ko-KR.Jina
...
```
