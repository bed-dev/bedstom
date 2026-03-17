---
description: "Add StomMobs to your Minestom server."
---

# Installation

First, ensure you are using [Minestom](https://minestom.net/) as your server implementation.

StomMobs is available via [JitPack](https://jitpack.io/#bed-dev/stommobs).

## Dependency

Add the repository and dependency to your build file.

::: code-group

```kotlin [Gradle (Kotlin)]
repositories {
    maven("https://jitpack.io")
}

dependencies {
    implementation("com.github.bed-dev:stommobs:<version>")
}
```

```groovy [Gradle (Groovy)]
repositories {
    maven { url 'https://jitpack.io' }
}

dependencies {
    implementation 'com.github.bed-dev:stommobs:<version>'
}
```

```xml [Maven]
<repositories>
    <repository>
        <id>jitpack.io</id>
        <url>https://jitpack.io</url>
    </repository>
</repositories>

<dependencies>
    <dependency>
        <groupId>com.github.bed-dev</groupId>
        <artifactId>stommobs</artifactId>
        <version>&lt;version&gt;</version>
    </dependency>
</dependencies>
```

:::

