# Getting Started

## Installation

::: code-group

```kotlin [Kotlin DSL]
repositories {
    mavenCentral()
    maven("https://jitpack.io")
}

dependencies {
    implementation("com.github.bed-dev:stomboard:<tag>")
}
```

```groovy [Groovy DSL]
repositories {
    mavenCentral()
    maven { url = 'https://jitpack.io' }
}

dependencies {
    implementation 'com.github.bed-dev:stomboard:<tag>'
}
```

:::

## Create a Sidebar

::: code-group

```kotlin [Kotlin]
import codes.bed.minestom.sidebars.Sidebar

val lobbySidebar = Sidebar(
    initialTitle = "Lobby",
    lines = listOf(
        "Player: {player}",
        "Rank: {rank}",
        "",
        "Online: {online}"
    )
)
```

```java [Java]
import codes.bed.minestom.sidebars.Sidebar;
import java.util.List;

Sidebar lobbySidebar = new Sidebar(
    "Lobby",
    List.of(
        "Player: {player}",
        "Rank: {rank}",
        "",
        "Online: {online}"
    )
);
```

:::

## Assign to a Player

::: code-group

```kotlin [Kotlin]
import codes.bed.minestom.sidebars.SidebarManager
import net.minestom.server.entity.Player

val manager = SidebarManager.global

fun show(player: Player, online: Int) {
    manager.assign(
        player,
        lobbySidebar,
        mapOf(
            "{player}" to player.username,
            "{rank}" to "Default",
            "{online}" to online.toString()
        )
    )
}
```

```java [Java]
import codes.bed.minestom.sidebars.SidebarManager;
import net.minestom.server.entity.Player;
import java.util.Map;

SidebarManager manager = SidebarManager.global;

void show(Player player, int online) {
    manager.assign(
        player,
        lobbySidebar,
        Map.of(
            "{player}", player.getUsername(),
            "{rank}", "Default",
            "{online}", Integer.toString(online)
        )
    );
}
```

:::
