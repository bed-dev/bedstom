# Profile API

The `MobProfile` is the blueprint for a custom mob. It is immutable and contains all the logic, stats, and behaviors needed to spawn and tick a mob.

## Structure

A `MobProfile` consists of:

- **ID** (`String`): Unique identifier (e.g., `custom:raider`).
- **Entity Type** (`EntityType`): The Minestom entity type (e.g., `ZOMBIE`, `VILLAGER`).
- **Stats** (`MobStats`): Combat and movement attributes that scale with level.
- **Goals** (`List<GoalFactory>`): AI goals (e.g., wander, attack).
- **Targets** (`List<TargetFactory>`): AI target selectors (e.g., nearest player).
- **Lifecycle Hooks**: Callbacks for specific entity events.

## MobStats

`MobStats` defines the base attributes of the mob and how they increase per level.

| Attribute | Description | Base Value | Per Level Increase |
| :--- | :--- | :--- | :--- |
| **Health** | Max health of the mob. | `baseHealth` | `healthPerLevel` |
| **Attack** | Melee damage dealt. | `baseAttack` | `attackPerLevel` |
| **Speed** | Movement speed (blocks/tick). | `baseMoveSpeed` | `speedPerLevel` |
| **Armor** | Damage reduction. | `baseArmor` | `armorPerLevel` |
| **Follow Range** | Distance to track targets. | `baseFollowRange` | `followRangePerLevel` |

### Example Stats Calculation

If a mob is spawned at **Level 5**:
$$ \text{Total Health} = \text{baseHealth} + (\text{healthPerLevel} \times (5 - 1)) $$

## Lifecycle Hooks

Hooks allow you to run custom code when specific events occur.

### onSpawn
Triggered immediately after the mob is spawned into the instance.
- **Use Case**: Equip items, set custom metadata, play a sound.

### onTick
Triggered every tick (50ms).
- **Use Case**: Custom particles, regeneration, conditional checks.

### onDeath
Triggered when the mob dies.
- **Use Case**: Custom drops, explosion effects, chat messages.

### onAttack
Triggered when the mob successfully attacks a target.
- **Use Case**: Apply potion effects (poison, slow), knockback.

## Creating Profiles

You can build profiles using the fluid Java Builder or the Kotlin DSL.

::: code-group

```java [Java Builder]
var profile = MobProfileBuilder.create("custom:raider", EntityType.HUSK)
    .stats(new MobStats(
        28.0, 4.5,   // Health (Base, PerLevel)
        6.0, 1.4,    // Attack
        0.26, 0.012, // Speed
        3.0, 0.25,   // Armor
        30.0, 0.25   // Follow Range
    ))
    .onSpawn(mob -> {
        mob.setItemInMainHand(ItemStack.of(Material.IRON_AXE));
        mob.setCustomName(Component.text("Raider"));
        mob.setCustomNameVisible(true);
    })
    .onDeath((mob, killer) -> {
        // Drop custom loot
        if (killer instanceof Player) {
             mob.getInstance().dropItem(ItemStack.of(Material.EMERALD), mob.getPosition());
        }
    })
    .applyPathing(PathingPresets.hostileMelee(
        0.26, // Speed match stats
        20,   // Attack delay
        30.0, // Search range match stats
        true, // Line of sight
        entity -> true // Target everyone
    ))
    .build();
```

```kotlin [Kotlin DSL]
import codes.bed.minestom.mobs.dsl.mobProfile

val profile = mobProfile("custom:guardian", EntityType.DROWNED) {
    stats(MobStats(
        baseHealth = 34.0, healthPerLevel = 4.0,
        baseAttack = 7.0, attackPerLevel = 1.0,
        baseMoveSpeed = 0.24, speedPerLevel = 0.01,
        baseArmor = 2.0, armorPerLevel = 0.2,
        baseFollowRange = 32.0, followRangePerLevel = 0.5
    ))

    onSpawn { mob ->
        mob.itemInMainHand = ItemStack.of(Material.TRIDENT)
    }

    onAttack { mob, target ->
         // 50% chance to poison target
        if (Math.random() < 0.5 && target is LivingEntity) {
             target.addEffect(PotionEffect(PotionEffectType.POISON, 1, 100))
        }
    }

    pathing(
        PathingPresets.hostileMelee(
            speed = 0.24,
            attackDelay = 16,
            searchRange = 32.0
        )
    )
}
```

:::

## Registration

Before you can spawn a mob by its ID, you must register the profile with the spawner.

::: code-group

```kotlin [Kotlin]
// Register single
spawner.register(profile)

// Register multiple
spawner.registerAll(listOf(profileA, profileB))
```

```java [Java]
// Register single
spawner.register(profile);

// Register multiple
spawner.registerAll(List.of(profileA, profileB));
```

:::

