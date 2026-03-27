---
description: "Add StomMobs to your Minestom server."
---

# Installation

First, ensure you are using [Minestom](https://minestom.net/) as your server implementation.

StomMobs is available via Mavencentral

## Dependency

Add the repository and dependency to your build file.

::: code-group

```kotlin [Gradle (Kotlin)]
repositories {
    mavenCentral()
}

dependencies {
    implementation("codes.bed.minestom:mob:0.1.0")
}
```

```groovy [Gradle (Groovy)]
repositories {
    mavenentral()
}

dependencies {
    implementation 'codes.bed.minestom:mob:0.1.0'
}
```

```xml [Maven]

<dependencies>
    <dependency>
        <groupId>codes.bed.minestom</groupId>
        <artifactId>mob</artifactId>
        <version>0.1.0</version>
    </dependency>
</dependencies>
```

:::

